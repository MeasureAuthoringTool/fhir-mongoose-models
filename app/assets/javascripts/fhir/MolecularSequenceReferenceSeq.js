const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { OrientationTypeSchema } = require('./OrientationType');
const { ReferenceSchema } = require('./Reference');
const { StrandTypeSchema } = require('./StrandType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MolecularSequenceReferenceSeqSchema = BackboneElementSchemaFunction({
   chromosome : CodeableConceptSchema,
   genomeBuild : String,
   orientation : OrientationTypeSchema,
   referenceSeqId : CodeableConceptSchema,
   referenceSeqPointer : ReferenceSchema,
   referenceSeqString : String,
   strand : StrandTypeSchema,
   windowStart : Number,
   windowEnd : Number,
   fhirTitle: { type: String, default: 'MolecularSequenceReferenceSeq' },
});

class MolecularSequenceReferenceSeq extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceReferenceSeqSchema);
    this._type = 'FHIR::MolecularSequenceReferenceSeq';
  }
};


module.exports.MolecularSequenceReferenceSeqSchema = MolecularSequenceReferenceSeqSchema;
module.exports.MolecularSequenceReferenceSeq = MolecularSequenceReferenceSeq;
