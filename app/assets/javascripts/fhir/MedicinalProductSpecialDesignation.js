const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductSpecialDesignationSchema } = require('./allSchemaHeaders.js');

MedicinalProductSpecialDesignationSchema.add(BackboneElementSchema);
MedicinalProductSpecialDesignationSchema.remove('id');
MedicinalProductSpecialDesignationSchema.add({
  identifier: [IdentifierSchema],
  type: CodeableConceptSchema,
  intendedUse: CodeableConceptSchema,
  indicationCodeableConcept: CodeableConceptSchema,
  indicationReference: ReferenceSchema,
  status: CodeableConceptSchema,
  date: PrimitiveDateTimeSchema,
  species: CodeableConceptSchema,
});

module.exports.MedicinalProductSpecialDesignationSchema = MedicinalProductSpecialDesignationSchema;
