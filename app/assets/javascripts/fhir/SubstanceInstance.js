const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const SubstanceInstanceSchema = BackboneElementSchemaFunction({
  identifier: IdentifierSchema,
  expiry: PrimitiveDateTimeSchema,
  quantity: SimpleQuantitySchema,
  typeName: { type: String, default: 'SubstanceInstance' },
  _type: { type: String, default: 'FHIR::SubstanceInstance' },
});

class SubstanceInstance extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceInstanceSchema);
    this.typeName = 'SubstanceInstance';
    this._type = 'FHIR::SubstanceInstance';
  }
}

module.exports.SubstanceInstanceSchema = SubstanceInstanceSchema;
module.exports.SubstanceInstance = SubstanceInstance;
