const { ElementSchema } = require('./Element');
const { ClaimResponseStatusSchema } = require('./allSchemaHeaders.js');

ClaimResponseStatusSchema.add(ElementSchema);
ClaimResponseStatusSchema.remove('id');
ClaimResponseStatusSchema.add({
  value: String,
});

module.exports.ClaimResponseStatusSchema = ClaimResponseStatusSchema;
