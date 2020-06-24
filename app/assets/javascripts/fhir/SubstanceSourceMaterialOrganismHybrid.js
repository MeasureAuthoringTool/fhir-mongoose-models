const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSourceMaterialOrganismHybridSchema = BackboneElementSchemaFunction({
   maternalOrganismId : String,
   maternalOrganismName : String,
   paternalOrganismId : String,
   paternalOrganismName : String,
   hybridType : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'SubstanceSourceMaterialOrganismHybrid' },
});

class SubstanceSourceMaterialOrganismHybrid extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialOrganismHybridSchema);
    this._type = 'FHIR::SubstanceSourceMaterialOrganismHybrid';
  }
};


module.exports.SubstanceSourceMaterialOrganismHybridSchema = SubstanceSourceMaterialOrganismHybridSchema;
module.exports.SubstanceSourceMaterialOrganismHybrid = SubstanceSourceMaterialOrganismHybrid;
