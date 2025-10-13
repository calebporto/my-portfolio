import { prisma } from "./Config";

export default class AccessRepository {
    constructor() {
        this.orm = prisma
    }

    async create(ip) {
        try {
            
            return await this.orm.access.create({
                data: {
                    ip: ip
                }
            })
        } catch (error) {
            console.log(error)
            return null   
        }
    }
}