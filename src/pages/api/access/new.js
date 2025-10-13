import AccessRepository from "@/repository/Access";

export default async function handler(req, res) {
  try {
    const host = req.headers.host;
    if (host && typeof host === 'string' && !host.includes('localhost')) {
      const ipFromHeader =
        req.headers['x-forwarded-for'] || // proxies padrão (pode ser "a, b, c")
        req.headers['x-real-ip'] ||       // nginx com proxy_set_header
        req.headers['cf-connecting-ip'] ||// Cloudflare
        req.headers['true-client-ip'];    // outros CDNs

      let clientIp = null;

      if (ipFromHeader) {
        // x-forwarded-for pode ter uma lista: "client, proxy1, proxy2"
        clientIp = String(ipFromHeader).split(',')[0].trim();
      } else if (req.socket && req.socket.remoteAddress) {
        clientIp = req.socket.remoteAddress;
      } else if (req.connection && req.connection.remoteAddress) {
        clientIp = req.connection.remoteAddress;
      }

      // Normalizar IPv4 v6-mapped (ex: "::ffff:192.0.2.1")
      if (clientIp && clientIp.startsWith('::ffff:')) {
        clientIp = clientIp.replace('::ffff:', '');
      }

      const repository = new AccessRepository();
      const create = await repository.create(clientIp, host);
      if (!create) {
        console.log('Erro ao registrar IP')
      } else {
        console.log('IP registrado com sucesso', clientIp)
      }
    }
    return res.status(200).json('ok');
  } catch (error) {
    console.log(error)
    res.status(400).json()
  }
}