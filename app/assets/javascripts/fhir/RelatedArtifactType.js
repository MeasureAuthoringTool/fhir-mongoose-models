const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const RelatedArtifactTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'RelatedArtifactType' },
  _type: { type: String, default: 'FHIR::RelatedArtifactType' },
});

class RelatedArtifactType extends mongoose.Document {
  constructor(object) {
    super(object, RelatedArtifactTypeSchema);
    this.typeName = 'RelatedArtifactType';
    this._type = 'FHIR::RelatedArtifactType';
  }
}

module.exports.RelatedArtifactTypeSchema = RelatedArtifactTypeSchema;
module.exports.RelatedArtifactType = RelatedArtifactType;
