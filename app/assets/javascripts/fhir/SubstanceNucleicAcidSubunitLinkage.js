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

const SubstanceNucleicAcidSubunitLinkageSchema = BackboneElementSchemaFunction({
   connectivity : String,
   identifier : IdentifierSchema,
   name : String,
   residueSite : String,
   fhirTitle: { type: String, default: 'SubstanceNucleicAcidSubunitLinkage' },
});

class SubstanceNucleicAcidSubunitLinkage extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceNucleicAcidSubunitLinkageSchema);
    this._type = 'FHIR::SubstanceNucleicAcidSubunitLinkage';
  }
};


module.exports.SubstanceNucleicAcidSubunitLinkageSchema = SubstanceNucleicAcidSubunitLinkageSchema;
module.exports.SubstanceNucleicAcidSubunitLinkage = SubstanceNucleicAcidSubunitLinkage;
