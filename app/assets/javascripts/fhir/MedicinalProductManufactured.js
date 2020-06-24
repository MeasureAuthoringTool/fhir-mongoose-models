const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { ProdCharacteristicSchema } = require('./ProdCharacteristic');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductManufacturedSchema = DomainResourceSchemaFunction({
   manufacturedDoseForm : CodeableConceptSchema,
   unitOfPresentation : CodeableConceptSchema,
   quantity : QuantitySchema,
   manufacturer : [ReferenceSchema],
   ingredient : [ReferenceSchema],
   physicalCharacteristics : ProdCharacteristicSchema,
   otherCharacteristics : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'MedicinalProductManufactured' },
});

class MedicinalProductManufactured extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductManufacturedSchema);
    this._type = 'FHIR::MedicinalProductManufactured';
  }
};


module.exports.MedicinalProductManufacturedSchema = MedicinalProductManufacturedSchema;
module.exports.MedicinalProductManufactured = MedicinalProductManufactured;
