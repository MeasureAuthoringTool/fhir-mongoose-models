const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { ProdCharacteristicSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductManufacturedSchema } = require('./allSchemaHeaders.js');

MedicinalProductManufacturedSchema.add(DomainResourceSchema);
MedicinalProductManufacturedSchema.remove('id');
MedicinalProductManufacturedSchema.add({
  manufacturedDoseForm: CodeableConceptSchema,
  unitOfPresentation: CodeableConceptSchema,
  quantity: QuantitySchema,
  manufacturer: [ReferenceSchema],
  ingredient: [ReferenceSchema],
  physicalCharacteristics: ProdCharacteristicSchema,
  otherCharacteristics: [CodeableConceptSchema],
});

module.exports.MedicinalProductManufacturedSchema = MedicinalProductManufacturedSchema;
