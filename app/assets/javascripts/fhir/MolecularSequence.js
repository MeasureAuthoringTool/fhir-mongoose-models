const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MolecularSequenceQualitySchema } = require('./MolecularSequenceQuality');
const { MolecularSequenceReferenceSeqSchema } = require('./MolecularSequenceReferenceSeq');
const { MolecularSequenceRepositorySchema } = require('./MolecularSequenceRepository');
const { MolecularSequenceStructureVariantSchema } = require('./MolecularSequenceStructureVariant');
const { MolecularSequenceVariantSchema } = require('./MolecularSequenceVariant');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { SequenceTypeSchema } = require('./SequenceType');

const MolecularSequenceSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  type: SequenceTypeSchema,
  coordinateSystem: PrimitiveIntegerSchema,
  patient: ReferenceSchema,
  specimen: ReferenceSchema,
  device: ReferenceSchema,
  performer: ReferenceSchema,
  quantity: QuantitySchema,
  referenceSeq: MolecularSequenceReferenceSeqSchema,
  variant: [MolecularSequenceVariantSchema],
  observedSeq: PrimitiveStringSchema,
  quality: [MolecularSequenceQualitySchema],
  readCoverage: PrimitiveIntegerSchema,
  repository: [MolecularSequenceRepositorySchema],
  pointer: [ReferenceSchema],
  structureVariant: [MolecularSequenceStructureVariantSchema],
  typeName: { type: String, default: 'MolecularSequence' },
  _type: { type: String, default: 'FHIR::MolecularSequence' },
});

class MolecularSequence extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceSchema);
    this.typeName = 'MolecularSequence';
    this._type = 'FHIR::MolecularSequence';
  }
}

module.exports.MolecularSequenceSchema = MolecularSequenceSchema;
module.exports.MolecularSequence = MolecularSequence;
