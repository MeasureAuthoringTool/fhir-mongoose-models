const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideManifestPageSchema = BackboneElementSchemaFunction({
   name : String,
   title : String,
   anchor : [String],
   fhirTitle: { type: String, default: 'ImplementationGuideManifestPage' },
});

class ImplementationGuideManifestPage extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideManifestPageSchema);
    this._type = 'FHIR::ImplementationGuideManifestPage';
  }
};


module.exports.ImplementationGuideManifestPageSchema = ImplementationGuideManifestPageSchema;
module.exports.ImplementationGuideManifestPage = ImplementationGuideManifestPage;
