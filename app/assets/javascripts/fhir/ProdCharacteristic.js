const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');

const ProdCharacteristicSchema = BackboneElementSchemaFunction({
  height: QuantitySchema,
  width: QuantitySchema,
  depth: QuantitySchema,
  weight: QuantitySchema,
  nominalVolume: QuantitySchema,
  externalDiameter: QuantitySchema,
  shape: PrimitiveStringSchema,
  color: [PrimitiveStringSchema],
  imprint: [PrimitiveStringSchema],
  image: [AttachmentSchema],
  scoring: CodeableConceptSchema,
  typeName: { type: String, default: 'ProdCharacteristic' },
  _type: { type: String, default: 'FHIR::ProdCharacteristic' },
});

class ProdCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, ProdCharacteristicSchema);
    this.typeName = 'ProdCharacteristic';
    this._type = 'FHIR::ProdCharacteristic';
  }
}

module.exports.ProdCharacteristicSchema = ProdCharacteristicSchema;
module.exports.ProdCharacteristic = ProdCharacteristic;
