const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductManufacturingBusinessOperationSchema } = require('./allSchemaHeaders.js');

MedicinalProductManufacturingBusinessOperationSchema.add(BackboneElementSchema);
MedicinalProductManufacturingBusinessOperationSchema.remove('id');
MedicinalProductManufacturingBusinessOperationSchema.add({
  operationType: CodeableConceptSchema,
  authorisationReferenceNumber: IdentifierSchema,
  effectiveDate: PrimitiveDateTimeSchema,
  confidentialityIndicator: CodeableConceptSchema,
  manufacturer: [ReferenceSchema],
  regulator: ReferenceSchema,
});

module.exports.MedicinalProductManufacturingBusinessOperationSchema = MedicinalProductManufacturingBusinessOperationSchema;
