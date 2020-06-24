const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideDependsOnSchema = BackboneElementSchemaFunction({
   uri : String,
   packageId : String,
   version : String,
   fhirTitle: { type: String, default: 'ImplementationGuideDependsOn' },
});

class ImplementationGuideDependsOn extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDependsOnSchema);
    this._type = 'FHIR::ImplementationGuideDependsOn';
  }
};


module.exports.ImplementationGuideDependsOnSchema = ImplementationGuideDependsOnSchema;
module.exports.ImplementationGuideDependsOn = ImplementationGuideDependsOn;
