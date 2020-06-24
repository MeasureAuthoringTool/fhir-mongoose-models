const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductManufacturingBusinessOperationSchema = BackboneElementSchemaFunction({
   operationType : CodeableConceptSchema,
   authorisationReferenceNumber : IdentifierSchema,
   effectiveDate : DateTime,
   confidentialityIndicator : CodeableConceptSchema,
   manufacturer : [ReferenceSchema],
   regulator : ReferenceSchema,
   fhirTitle: { type: String, default: 'MedicinalProductManufacturingBusinessOperation' },
});

class MedicinalProductManufacturingBusinessOperation extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductManufacturingBusinessOperationSchema);
    this._type = 'FHIR::MedicinalProductManufacturingBusinessOperation';
  }
};


module.exports.MedicinalProductManufacturingBusinessOperationSchema = MedicinalProductManufacturingBusinessOperationSchema;
module.exports.MedicinalProductManufacturingBusinessOperation = MedicinalProductManufacturingBusinessOperation;
