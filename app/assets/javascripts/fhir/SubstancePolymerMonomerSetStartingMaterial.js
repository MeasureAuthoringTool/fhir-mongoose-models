const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstanceAmountSchema } = require('./SubstanceAmount');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstancePolymerMonomerSetStartingMaterialSchema = BackboneElementSchemaFunction({
   material : CodeableConceptSchema,
   type : CodeableConceptSchema,
   isDefining : Boolean,
   amount : SubstanceAmountSchema,
   fhirTitle: { type: String, default: 'SubstancePolymerMonomerSetStartingMaterial' },
});

class SubstancePolymerMonomerSetStartingMaterial extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerMonomerSetStartingMaterialSchema);
    this._type = 'FHIR::SubstancePolymerMonomerSetStartingMaterial';
  }
};


module.exports.SubstancePolymerMonomerSetStartingMaterialSchema = SubstancePolymerMonomerSetStartingMaterialSchema;
module.exports.SubstancePolymerMonomerSetStartingMaterial = SubstancePolymerMonomerSetStartingMaterial;
