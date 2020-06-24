const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { GroupCharacteristicSchema } = require('./GroupCharacteristic');
const { GroupMemberSchema } = require('./GroupMember');
const { GroupTypeSchema } = require('./GroupType');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GroupSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   type : GroupTypeSchema,
   actual : Boolean,
   code : CodeableConceptSchema,
   name : String,
   quantity : Number,
   managingEntity : ReferenceSchema,
   characteristic : [GroupCharacteristicSchema],
   member : [GroupMemberSchema],
   fhirTitle: { type: String, default: 'Group' },
});

class Group extends mongoose.Document {
  constructor(object) {
    super(object, GroupSchema);
    this._type = 'FHIR::Group';
  }
};


module.exports.GroupSchema = GroupSchema;
module.exports.Group = Group;
