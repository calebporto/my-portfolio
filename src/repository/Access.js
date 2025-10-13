import { prisma } from "./Config";

export default class AccessRepository {
    constructor() {
        this.orm = prisma
    }

    async create(ip, host) {
        try {
            
            return await this.orm.access.create({
                data: {
                    ip: ip,
                    host: host
                }
            })
        } catch (error) {
            console.log(error)
            return null   
        }
    }
}