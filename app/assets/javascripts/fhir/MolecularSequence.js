const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MolecularSequenceQualitySchema } = require('./MolecularSequenceQuality');
const { MolecularSequenceReferenceSeqSchema } = require('./MolecularSequenceReferenceSeq');
const { MolecularSequenceRepositorySchema } = require('./MolecularSequenceRepository');
const { MolecularSequenceStructureVariantSchema } = require('./MolecularSequenceStructureVariant');
const { MolecularSequenceVariantSchema } = require('./MolecularSequenceVariant');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { SequenceTypeSchema } = require('./SequenceType');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MolecularSequenceSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   type : SequenceTypeSchema,
   coordinateSystem : Number,
   patient : ReferenceSchema,
   specimen : ReferenceSchema,
   device : ReferenceSchema,
   performer : ReferenceSchema,
   quantity : QuantitySchema,
   referenceSeq : MolecularSequenceReferenceSeqSchema,
   variant : [MolecularSequenceVariantSchema],
   observedSeq : String,
   quality : [MolecularSequenceQualitySchema],
   readCoverage : Number,
   repository : [MolecularSequenceRepositorySchema],
   pointer : [ReferenceSchema],
   structureVariant : [MolecularSequenceStructureVariantSchema],
   fhirTitle: { type: String, default: 'MolecularSequence' },
});

class MolecularSequence extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceSchema);
    this._type = 'FHIR::MolecularSequence';
  }
};


module.exports.MolecularSequenceSchema = MolecularSequenceSchema;
module.exports.MolecularSequence = MolecularSequence;
