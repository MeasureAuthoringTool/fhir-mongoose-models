const { ElementSchema } = require('./Element');
const { AccountStatusSchema } = require('./allSchemaHeaders.js');

AccountStatusSchema.add(ElementSchema);
AccountStatusSchema.remove('id');
AccountStatusSchema.add({
  value: String,
});

module.exports.AccountStatusSchema = AccountStatusSchema;
