const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstanceProteinSubunitSchema } = require('./SubstanceProteinSubunit');

const SubstanceProteinSchema = DomainResourceSchemaFunction({
  sequenceType: CodeableConceptSchema,
  numberOfSubunits: PrimitiveIntegerSchema,
  disulfideLinkage: [PrimitiveStringSchema],
  subunit: [SubstanceProteinSubunitSchema],
  typeName: { type: String, default: 'SubstanceProtein' },
  _type: { type: String, default: 'FHIR::SubstanceProtein' },
});

class SubstanceProtein extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceProteinSchema);
    this.typeName = 'SubstanceProtein';
    this._type = 'FHIR::SubstanceProtein';
  }
}

module.exports.SubstanceProteinSchema = SubstanceProteinSchema;
module.exports.SubstanceProtein = SubstanceProtein;
