const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const ImmunizationEducationSchema = BackboneElementSchemaFunction({
  documentType: PrimitiveStringSchema,
  reference: PrimitiveUriSchema,
  publicationDate: PrimitiveDateTimeSchema,
  presentationDate: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'ImmunizationEducation' },
  _type: { type: String, default: 'FHIR::ImmunizationEducation' },
});

class ImmunizationEducation extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationEducationSchema);
    this.typeName = 'ImmunizationEducation';
    this._type = 'FHIR::ImmunizationEducation';
  }
}

module.exports.ImmunizationEducationSchema = ImmunizationEducationSchema;
module.exports.ImmunizationEducation = ImmunizationEducation;
