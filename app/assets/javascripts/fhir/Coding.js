const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodingSchema = ElementSchemaFunction({
   system : String,
   version : String,
   code : String,
   display : String,
   userSelected : Boolean,
   fhirTitle: { type: String, default: 'Coding' },
});

class Coding extends mongoose.Document {
  constructor(object) {
    super(object, CodingSchema);
    this._type = 'FHIR::Coding';
  }
};


module.exports.CodingSchema = CodingSchema;
module.exports.Coding = Coding;
