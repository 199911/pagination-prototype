class ItemService {
    constructor(knex) {
        this.knex = knex;
        this.table = 'items'
        this.pageSize = 3;
    }

    // @private
    decodeToken (token) {
        return {
            id: token
        };
    }

    async getPage (token) {
        const queryBuilder = this.knex
            .table(this.table)
            .select()
            .limit(this.pageSize)
            .orderBy('id', 'desc');
        if (token) {
            const { id } = this.decodeToken(token);
            queryBuilder.where('id', '<=', id)
        }
        const results = await queryBuilder;
        return results;
    }
}

module.exports = ItemService;
