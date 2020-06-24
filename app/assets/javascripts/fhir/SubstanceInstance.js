const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceInstanceSchema = BackboneElementSchemaFunction({
   identifier : IdentifierSchema,
   expiry : DateTime,
   quantity : SimpleQuantitySchema,
   fhirTitle: { type: String, default: 'SubstanceInstance' },
});

class SubstanceInstance extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceInstanceSchema);
    this._type = 'FHIR::SubstanceInstance';
  }
};


module.exports.SubstanceInstanceSchema = SubstanceInstanceSchema;
module.exports.SubstanceInstance = SubstanceInstance;
