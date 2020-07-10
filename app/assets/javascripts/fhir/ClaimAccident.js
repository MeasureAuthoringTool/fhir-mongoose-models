const { AddressSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimAccidentSchema } = require('./allSchemaHeaders.js');

ClaimAccidentSchema.add(BackboneElementSchema);
ClaimAccidentSchema.remove('id');
ClaimAccidentSchema.add({
  date: PrimitiveDateSchema,
  type: CodeableConceptSchema,
  locationAddress: AddressSchema,
  locationReference: ReferenceSchema,
});

module.exports.ClaimAccidentSchema = ClaimAccidentSchema;
