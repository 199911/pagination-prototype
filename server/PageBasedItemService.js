const ItemService = require('./ItemService');

class CursorBasedItemService extends ItemService {

    async getPage (token) {
        const page = token ? parseInt(token, 10) : 0;
        const queryBuilder = this.knex
            .table(this.table)
            .select()
            .offset(this.pageSize*page)
            .limit(this.pageSize)
            .orderBy('id', 'desc');
        const results = await queryBuilder;
        return {
            data: results,
            pagination: {
                currentPage: page,
                nextPage: page + 1,
            }
        };
    }
}

module.exports = CursorBasedItemService;
