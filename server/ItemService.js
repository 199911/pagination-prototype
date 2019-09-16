class ItemService {
    constructor(knex) {
        this.knex = knex;
        this.table = 'items'
        this.pageSize = 3;
    }

    async addItem(name, likes) {
        const queryBuilder = this.knex
            .table(this.table)
            .insert({ name, likes });
        await queryBuilder;
    }
}

module.exports = ItemService;
