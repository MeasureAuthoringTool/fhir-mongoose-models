const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const SupplyDeliverySuppliedItemSchema = BackboneElementSchemaFunction({
  quantity: SimpleQuantitySchema,
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  typeName: { type: String, default: 'SupplyDeliverySuppliedItem' },
  _type: { type: String, default: 'FHIR::SupplyDeliverySuppliedItem' },
});

class SupplyDeliverySuppliedItem extends mongoose.Document {
  constructor(object) {
    super(object, SupplyDeliverySuppliedItemSchema);
    this.typeName = 'SupplyDeliverySuppliedItem';
    this._type = 'FHIR::SupplyDeliverySuppliedItem';
  }
}

module.exports.SupplyDeliverySuppliedItemSchema = SupplyDeliverySuppliedItemSchema;
module.exports.SupplyDeliverySuppliedItem = SupplyDeliverySuppliedItem;
