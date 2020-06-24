const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ProdCharacteristicSchema = BackboneElementSchemaFunction({
   height : QuantitySchema,
   width : QuantitySchema,
   depth : QuantitySchema,
   weight : QuantitySchema,
   nominalVolume : QuantitySchema,
   externalDiameter : QuantitySchema,
   shape : String,
   color : [String],
   imprint : [String],
   image : [AttachmentSchema],
   scoring : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ProdCharacteristic' },
});

class ProdCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, ProdCharacteristicSchema);
    this._type = 'FHIR::ProdCharacteristic';
  }
};


module.exports.ProdCharacteristicSchema = ProdCharacteristicSchema;
module.exports.ProdCharacteristic = ProdCharacteristic;
