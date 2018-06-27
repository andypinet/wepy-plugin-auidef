import postcss from 'postcss';

export default class {

    constructor(c = {}) {
        const def = {
            filter: new RegExp('\.(wxml)$'),
            config: {}
        };

        this.setting = Object.assign({}, def, c);
    }
    apply (op) {

        let setting = this.setting;

        if (!setting.filter.test(op.file)) {
            op.next();
        } else {
            op.output && op.output({
                action: '变更',
                file: op.file
            });

            console.log('op.code', op.code, op);
            op.next();
        }
    }
}