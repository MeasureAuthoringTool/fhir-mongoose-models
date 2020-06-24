const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { IdentifierSchema } = require('./Identifier');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ReferenceSchema = ElementSchemaFunction({
   reference : String,
   type : String,
   identifier : IdentifierSchema,
   display : String,
   fhirTitle: { type: String, default: 'Reference' },
});

class Reference extends mongoose.Document {
  constructor(object) {
    super(object, ReferenceSchema);
    this._type = 'FHIR::Reference';
  }
};


module.exports.ReferenceSchema = ReferenceSchema;
module.exports.Reference = Reference;
