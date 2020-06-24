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

const MolecularSequenceVariantSchema = BackboneElementSchemaFunction({
   start : Number,
   end : Number,
   observedAllele : String,
   referenceAllele : String,
   cigar : String,
   variantPointer : ReferenceSchema,
   fhirTitle: { type: String, default: 'MolecularSequenceVariant' },
});

class MolecularSequenceVariant extends mongoose.Document {
  constructor(object) {
    super(object, MolecularSequenceVariantSchema);
    this._type = 'FHIR::MolecularSequenceVariant';
  }
};


module.exports.MolecularSequenceVariantSchema = MolecularSequenceVariantSchema;
module.exports.MolecularSequenceVariant = MolecularSequenceVariant;
