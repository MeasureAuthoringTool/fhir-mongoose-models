const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SupplyDeliverySuppliedItemSchema = BackboneElementSchemaFunction({
   quantity : SimpleQuantitySchema,
   itemCodeableConcept : CodeableConceptSchema,
   itemReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'SupplyDeliverySuppliedItem' },
});

class SupplyDeliverySuppliedItem extends mongoose.Document {
  constructor(object) {
    super(object, SupplyDeliverySuppliedItemSchema);
    this._type = 'FHIR::SupplyDeliverySuppliedItem';
  }
};


module.exports.SupplyDeliverySuppliedItemSchema = SupplyDeliverySuppliedItemSchema;
module.exports.SupplyDeliverySuppliedItem = SupplyDeliverySuppliedItem;
