const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { OrientationTypeSchema } = require('./OrientationType');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { StrandTypeSchema } = require('./StrandType');

const MolecularSequenceReferenceSeqSchema = BackboneElementSchemaFunction({
  chromosome: CodeableConceptSchema,
  genomeBuild: PrimitiveStringSchema,
  orientation: OrientationTypeSchema,
  referenceSeqId: CodeableConceptSchema,
  referenceSeqPointer: ReferenceSchema,
  referenceSeqString: PrimitiveStringSchema,
  strand: StrandTypeSchema,
  windowStart: PrimitiveIntegerSchema,
  windowEnd: PrimitiveIntegerSchema,
  typeName: { type: String, default: 'MolecularSequenceReferenceSeq' },
  _type: { type: String, default: 'FHIR::MolecularSequenceReferenceSeq' },
});

class MolecularSequenceReferenceSeq extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceReferenceSeqSchema);
    this.typeName = 'MolecularSequenceReferenceSeq';
    this._type = 'FHIR::MolecularSequenceReferenceSeq';
  }
}

module.exports.MolecularSequenceReferenceSeqSchema = MolecularSequenceReferenceSeqSchema;
module.exports.MolecularSequenceReferenceSeq = MolecularSequenceReferenceSeq;
