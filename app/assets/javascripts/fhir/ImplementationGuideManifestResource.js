const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideManifestResourceSchema = BackboneElementSchemaFunction({
   reference : ReferenceSchema,
   exampleBoolean : Boolean,
   exampleCanonical : String,
   relativePath : String,
   fhirTitle: { type: String, default: 'ImplementationGuideManifestResource' },
});

class ImplementationGuideManifestResource extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideManifestResourceSchema);
    this._type = 'FHIR::ImplementationGuideManifestResource';
  }
};


module.exports.ImplementationGuideManifestResourceSchema = ImplementationGuideManifestResourceSchema;
module.exports.ImplementationGuideManifestResource = ImplementationGuideManifestResource;
