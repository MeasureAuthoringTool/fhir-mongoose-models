const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductManufacturingBusinessOperationSchema = BackboneElementSchemaFunction({
  operationType: CodeableConceptSchema,
  authorisationReferenceNumber: IdentifierSchema,
  effectiveDate: PrimitiveDateTimeSchema,
  confidentialityIndicator: CodeableConceptSchema,
  manufacturer: [ReferenceSchema],
  regulator: ReferenceSchema,
  typeName: { type: String, default: 'MedicinalProductManufacturingBusinessOperation' },
  _type: { type: String, default: 'FHIR::MedicinalProductManufacturingBusinessOperation' },
});

class MedicinalProductManufacturingBusinessOperation extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductManufacturingBusinessOperationSchema);
    this.typeName = 'MedicinalProductManufacturingBusinessOperation';
    this._type = 'FHIR::MedicinalProductManufacturingBusinessOperation';
  }
}

module.exports.MedicinalProductManufacturingBusinessOperationSchema = MedicinalProductManufacturingBusinessOperationSchema;
module.exports.MedicinalProductManufacturingBusinessOperation = MedicinalProductManufacturingBusinessOperation;
