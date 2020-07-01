const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ConsentProvisionActorSchema } = require('./ConsentProvisionActor');
const { ConsentProvisionDataSchema } = require('./ConsentProvisionData');
const { ConsentProvisionTypeSchema } = require('./ConsentProvisionType');
const { PeriodSchema } = require('./Period');

const ConsentProvisionSchema = BackboneElementSchemaFunction({
  type: ConsentProvisionTypeSchema,
  period: PeriodSchema,
  actor: [ConsentProvisionActorSchema],
  action: [CodeableConceptSchema],
  securityLabel: [CodingSchema],
  purpose: [CodingSchema],
  class: [CodingSchema],
  code: [CodeableConceptSchema],
  dataPeriod: PeriodSchema,
  data: [ConsentProvisionDataSchema],
  provision: [ConsentProvisionSchema],
  typeName: { type: String, default: 'ConsentProvision' },
  _type: { type: String, default: 'FHIR::ConsentProvision' },
});

class ConsentProvision extends mongoose.Document {
  constructor(object) {
    super(object, ConsentProvisionSchema);
    this.typeName = 'ConsentProvision';
    this._type = 'FHIR::ConsentProvision';
  }
}

module.exports.ConsentProvisionSchema = ConsentProvisionSchema;
module.exports.ConsentProvision = ConsentProvision;
