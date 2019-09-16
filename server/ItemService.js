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

    // @private
    buildToken (record) {
        if (!record) {
            return null
        }
        return record.id;
    }

    async getPage (token) {
        const queryBuilder = this.knex
            .table(this.table)
            .select()
            .limit(this.pageSize + 1)
            .orderBy('id', 'desc');
        if (token) {
            const { id } = this.decodeToken(token);
            queryBuilder.where('id', '<=', id)
        }
        const results = await queryBuilder;

        const currentPage = this.buildToken(results[0]);
        if (results.length === this.pageSize + 1) {
            // have next page
            const nextPage = this.buildToken(results[this.pageSize]);
            return {
                // Remove the last item for build next page token
                data: results.slice(0, -1),
                pagination: {
                    currentPage,
                    nextPage,
                }
            }
        } else {
            return {
                data: results,
                pagination: {
                    currentPage,
                    nextPage: null,
                }
            };
        }
    }

    async addItem(name, likes) {
        const queryBuilder = this.knex
            .table(this.table)
            .insert({ name, likes });
        await queryBuilder;
    }
}

module.exports = ItemService;
