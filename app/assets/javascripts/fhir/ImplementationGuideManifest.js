const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ImplementationGuideManifestPageSchema } = require('./ImplementationGuideManifestPage');
const { ImplementationGuideManifestResourceSchema } = require('./ImplementationGuideManifestResource');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideManifestSchema = BackboneElementSchemaFunction({
   rendering : String,
   resource : [ImplementationGuideManifestResourceSchema],
   page : [ImplementationGuideManifestPageSchema],
   image : [String],
   other : [String],
   fhirTitle: { type: String, default: 'ImplementationGuideManifest' },
});

class ImplementationGuideManifest extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideManifestSchema);
    this._type = 'FHIR::ImplementationGuideManifest';
  }
};


module.exports.ImplementationGuideManifestSchema = ImplementationGuideManifestSchema;
module.exports.ImplementationGuideManifest = ImplementationGuideManifest;
