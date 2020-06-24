const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RelatedArtifactTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'RelatedArtifactType' },
});

class RelatedArtifactType extends mongoose.Document {
  constructor(object) {
    super(object, RelatedArtifactTypeSchema);
    this._type = 'FHIR::RelatedArtifactType';
  }
};


module.exports.RelatedArtifactTypeSchema = RelatedArtifactTypeSchema;
module.exports.RelatedArtifactType = RelatedArtifactType;
