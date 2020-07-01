const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SubstanceNucleicAcidSubunitLinkageSchema = BackboneElementSchemaFunction({
  connectivity: PrimitiveStringSchema,
  identifier: IdentifierSchema,
  name: PrimitiveStringSchema,
  residueSite: PrimitiveStringSchema,
  typeName: { type: String, default: 'SubstanceNucleicAcidSubunitLinkage' },
  _type: { type: String, default: 'FHIR::SubstanceNucleicAcidSubunitLinkage' },
});

class SubstanceNucleicAcidSubunitLinkage extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceNucleicAcidSubunitLinkageSchema);
    this.typeName = 'SubstanceNucleicAcidSubunitLinkage';
    this._type = 'FHIR::SubstanceNucleicAcidSubunitLinkage';
  }
}

module.exports.SubstanceNucleicAcidSubunitLinkageSchema = SubstanceNucleicAcidSubunitLinkageSchema;
module.exports.SubstanceNucleicAcidSubunitLinkage = SubstanceNucleicAcidSubunitLinkage;
