const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ResourceTypeSchema } = require('./ResourceType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideGlobalSchema = BackboneElementSchemaFunction({
   type : ResourceTypeSchema,
   profile : String,
   fhirTitle: { type: String, default: 'ImplementationGuideGlobal' },
});

class ImplementationGuideGlobal extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideGlobalSchema);
    this._type = 'FHIR::ImplementationGuideGlobal';
  }
};


module.exports.ImplementationGuideGlobalSchema = ImplementationGuideGlobalSchema;
module.exports.ImplementationGuideGlobal = ImplementationGuideGlobal;
