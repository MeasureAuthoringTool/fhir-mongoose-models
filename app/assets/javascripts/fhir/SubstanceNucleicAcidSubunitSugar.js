const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SubstanceNucleicAcidSubunitSugarSchema = BackboneElementSchemaFunction({
  identifier: IdentifierSchema,
  name: PrimitiveStringSchema,
  residueSite: PrimitiveStringSchema,
  typeName: { type: String, default: 'SubstanceNucleicAcidSubunitSugar' },
  _type: { type: String, default: 'FHIR::SubstanceNucleicAcidSubunitSugar' },
});

class SubstanceNucleicAcidSubunitSugar extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceNucleicAcidSubunitSugarSchema);
    this.typeName = 'SubstanceNucleicAcidSubunitSugar';
    this._type = 'FHIR::SubstanceNucleicAcidSubunitSugar';
  }
}

module.exports.SubstanceNucleicAcidSubunitSugarSchema = SubstanceNucleicAcidSubunitSugarSchema;
module.exports.SubstanceNucleicAcidSubunitSugar = SubstanceNucleicAcidSubunitSugar;
