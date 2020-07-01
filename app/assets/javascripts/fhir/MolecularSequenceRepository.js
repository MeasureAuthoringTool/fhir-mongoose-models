const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { RepositoryTypeSchema } = require('./RepositoryType');

const MolecularSequenceRepositorySchema = BackboneElementSchemaFunction({
  type: RepositoryTypeSchema,
  url: PrimitiveUriSchema,
  name: PrimitiveStringSchema,
  datasetId: PrimitiveStringSchema,
  variantsetId: PrimitiveStringSchema,
  readsetId: PrimitiveStringSchema,
  typeName: { type: String, default: 'MolecularSequenceRepository' },
  _type: { type: String, default: 'FHIR::MolecularSequenceRepository' },
});

class MolecularSequenceRepository extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceRepositorySchema);
    this.typeName = 'MolecularSequenceRepository';
    this._type = 'FHIR::MolecularSequenceRepository';
  }
}

module.exports.MolecularSequenceRepositorySchema = MolecularSequenceRepositorySchema;
module.exports.MolecularSequenceRepository = MolecularSequenceRepository;
