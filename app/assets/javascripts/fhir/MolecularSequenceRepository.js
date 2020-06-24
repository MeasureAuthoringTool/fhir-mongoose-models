const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { RepositoryTypeSchema } = require('./RepositoryType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MolecularSequenceRepositorySchema = BackboneElementSchemaFunction({
   type : RepositoryTypeSchema,
   url : String,
   name : String,
   datasetId : String,
   variantsetId : String,
   readsetId : String,
   fhirTitle: { type: String, default: 'MolecularSequenceRepository' },
});

class MolecularSequenceRepository extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceRepositorySchema);
    this._type = 'FHIR::MolecularSequenceRepository';
  }
};


module.exports.MolecularSequenceRepositorySchema = MolecularSequenceRepositorySchema;
module.exports.MolecularSequenceRepository = MolecularSequenceRepository;
