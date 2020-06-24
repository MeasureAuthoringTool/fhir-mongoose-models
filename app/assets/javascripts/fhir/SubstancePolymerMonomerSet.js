const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstancePolymerMonomerSetStartingMaterialSchema } = require('./SubstancePolymerMonomerSetStartingMaterial');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstancePolymerMonomerSetSchema = BackboneElementSchemaFunction({
   ratioType : CodeableConceptSchema,
   startingMaterial : [SubstancePolymerMonomerSetStartingMaterialSchema],
   fhirTitle: { type: String, default: 'SubstancePolymerMonomerSet' },
});

class SubstancePolymerMonomerSet extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerMonomerSetSchema);
    this._type = 'FHIR::SubstancePolymerMonomerSet';
  }
};


module.exports.SubstancePolymerMonomerSetSchema = SubstancePolymerMonomerSetSchema;
module.exports.SubstancePolymerMonomerSet = SubstancePolymerMonomerSet;
