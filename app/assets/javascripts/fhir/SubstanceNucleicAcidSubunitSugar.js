const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceNucleicAcidSubunitSugarSchema = BackboneElementSchemaFunction({
   identifier : IdentifierSchema,
   name : String,
   residueSite : String,
   fhirTitle: { type: String, default: 'SubstanceNucleicAcidSubunitSugar' },
});

class SubstanceNucleicAcidSubunitSugar extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceNucleicAcidSubunitSugarSchema);
    this._type = 'FHIR::SubstanceNucleicAcidSubunitSugar';
  }
};


module.exports.SubstanceNucleicAcidSubunitSugarSchema = SubstanceNucleicAcidSubunitSugarSchema;
module.exports.SubstanceNucleicAcidSubunitSugar = SubstanceNucleicAcidSubunitSugar;
