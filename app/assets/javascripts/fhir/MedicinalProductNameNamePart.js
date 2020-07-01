const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MedicinalProductNameNamePartSchema = BackboneElementSchemaFunction({
  part: PrimitiveStringSchema,
  type: CodingSchema,
  typeName: { type: String, default: 'MedicinalProductNameNamePart' },
  _type: { type: String, default: 'FHIR::MedicinalProductNameNamePart' },
});

class MedicinalProductNameNamePart extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductNameNamePartSchema);
    this.typeName = 'MedicinalProductNameNamePart';
    this._type = 'FHIR::MedicinalProductNameNamePart';
  }
}

module.exports.MedicinalProductNameNamePartSchema = MedicinalProductNameNamePartSchema;
module.exports.MedicinalProductNameNamePart = MedicinalProductNameNamePart;
