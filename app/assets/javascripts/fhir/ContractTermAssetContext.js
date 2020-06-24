const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractTermAssetContextSchema = BackboneElementSchemaFunction({
   reference : ReferenceSchema,
   code : [CodeableConceptSchema],
   text : String,
   fhirTitle: { type: String, default: 'ContractTermAssetContext' },
});

class ContractTermAssetContext extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermAssetContextSchema);
    this._type = 'FHIR::ContractTermAssetContext';
  }
};


module.exports.ContractTermAssetContextSchema = ContractTermAssetContextSchema;
module.exports.ContractTermAssetContext = ContractTermAssetContext;
