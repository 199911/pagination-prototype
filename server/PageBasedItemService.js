const ItemService = require('./ItemService');

class CursorBasedItemService extends ItemService {

    async getPage (token) {
        const page = token ? parseInt(token, 10) : 0;
        const dataQueryBuilder = this.knex
            .table(this.table)
            .select()
            .offset(this.pageSize*page)
            .limit(this.pageSize)
            .orderBy('id', 'desc');
        console.log(dataQueryBuilder.toString());
        const results = await dataQueryBuilder;
        console.log(results);
        // const countQueryBuilder = this.knex
        //     .table(this.table)
        //     .count(null, {as: 'count'});
        // Improve row cound query performance:
        const countQueryBuilder = this.knex
            .table('INFORMATION_SCHEMA.TABLES')
            .select('TABLE_ROWS')
            .where({'TABLE_NAME': this.table});
        console.log(countQueryBuilder.toString());
        const [{TABLE_ROWS: count}] = await countQueryBuilder;
        const maxPage = Math.ceil(count / this.pageSize)
        let currentPage = page;
        let nextPage = currentPage + 1 < maxPage ? currentPage + 1 : null
        return {
            data: results,
            pagination: {
                currentPage,
                nextPage,
            }
        };
    }
}

module.exports = CursorBasedItemService;
