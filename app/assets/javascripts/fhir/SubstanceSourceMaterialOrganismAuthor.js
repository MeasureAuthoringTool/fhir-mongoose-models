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

const SubstanceSourceMaterialOrganismAuthorSchema = BackboneElementSchemaFunction({
   authorType : CodeableConceptSchema,
   authorDescription : String,
   fhirTitle: { type: String, default: 'SubstanceSourceMaterialOrganismAuthor' },
});

class SubstanceSourceMaterialOrganismAuthor extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialOrganismAuthorSchema);
    this._type = 'FHIR::SubstanceSourceMaterialOrganismAuthor';
  }
};


module.exports.SubstanceSourceMaterialOrganismAuthorSchema = SubstanceSourceMaterialOrganismAuthorSchema;
module.exports.SubstanceSourceMaterialOrganismAuthor = SubstanceSourceMaterialOrganismAuthor;
