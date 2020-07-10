const { ElementSchema } = require('./Element');
const { ClaimStatusSchema } = require('./allSchemaHeaders.js');

ClaimStatusSchema.add(ElementSchema);
ClaimStatusSchema.remove('id');
ClaimStatusSchema.add({
  value: String,
});

module.exports.ClaimStatusSchema = ClaimStatusSchema;
